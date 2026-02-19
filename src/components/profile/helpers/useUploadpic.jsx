import { useMutation, useQuery } from "@tanstack/react-query";
import { handleUpload } from "./handleUpload";
import { supabase } from '../../../../supabaseClient'
import { queryClient } from '../../../main'
import { getUser } from "../../../utils/getUser";

export default function useUploadPic(){
    const { data:userData, isLoading } = useQuery({
        queryKey: ['getUser'],
        queryFn: getUser
    })
    const {mutateAsync,isPending,error}=useMutation({
        mutationFn:async ({file}) => {
            console.log('user',userData.data.user)
            const user=userData.data.user
            const fileExt = file.name.split('.').pop()
            const fileName = `${user.id}/${crypto.randomUUID()}.${fileExt}`
            if(!file || !file.type.startsWith('image/')){
                throw new Error('not an image')
              }
            const { error } = await supabase.storage
              .from('avatars')
              .upload(fileName, file)
        
            if (error) throw error
        
            const { data } = supabase.storage
              .from('avatars')
              .getPublicUrl(fileName)
        
            await supabase.auth.updateUser({
              data: { avatar_url: data.publicUrl }
            })
            console.log(data.publicUrl)
            return data.publicUrl
        
    },
    onMutate: async ({file}) => {

        await queryClient.cancelQueries(['getUser'])
    
        const previousUser = queryClient.getQueryData(['getUser'])
    
        const previewUrl = URL.createObjectURL(file)
    
        queryClient.setQueryData(['getUser'], (old) => ({
          ...old,
          data: {
            ...old.data,
            user: {
              ...old.data.user,
              user_metadata: {
                ...old.data.user.user_metadata,
                avatar_url: previewUrl
              }
            }
          }
        }))
    
        return { previousUser }
      },
      onError: (err, {file}, context) => {
        queryClient.setQueryData(['getUser'], context.previousUser)
      },
      onSettled: () => {
        queryClient.invalidateQueries(['getUser'])
      }
})
   return {mutateAsync,isPending,error}
    
}