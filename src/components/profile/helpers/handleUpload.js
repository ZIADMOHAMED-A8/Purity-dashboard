import { supabase } from '../../../../supabaseClient'
import { queryClient } from '../../../main'


export const handleUpload = async (e,data) => {
    const user=data.data.user
    const file = e.target.files[0]
  
    if (!file) return
  
    const fileExt = file.name.split('.').pop()
    const fileName = `${user.id}/${crypto.randomUUID()}.${fileExt}`

  
    const { data:udata, error } = await supabase.storage
      .from('avatars')
      .upload(fileName, file)
  
    if (error) {
      console.log(error)
      return
    }
  console.log('worked')
    const { data: publicUrlData } = supabase
      .storage
      .from('avatars')
      .getPublicUrl(fileName)
      await supabase.auth.updateUser({
        data: {
          avatar_url: publicUrlData.publicUrl
        }
      })
      queryClient.invalidateQueries({queryKey:['getUser']})
    }