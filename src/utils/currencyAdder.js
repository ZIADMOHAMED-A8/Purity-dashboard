export default function toCurrencyConverter(text){
    return new Intl.NumberFormat("en-US",{
        style:'currency',
        currency:'USD'
    }).format(text)
}