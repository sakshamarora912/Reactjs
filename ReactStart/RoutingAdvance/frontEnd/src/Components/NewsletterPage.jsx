import { useFetcher } from "react-router-dom"
import { useEffect } from "react"
// import { Form } from "react-router-dom"
const NewsletterPage = () => {
  const fetcher = useFetcher();
  const{state} = fetcher;

  // useEffect(()=>{
  //   if(state == 'idle' && data && data.message){
  //     window.alert(data.message)
  //   }
  // },[data,state])

  return (
    <fetcher.Form method="post" action="/newsletter">
      <input
        type="email"
        placeholder="Sign up for nesletter..."
        aria-label="Sign up for newsletter"
        className="text-inherit py-1 px-3 rounded-none border-none"
      />
      <button className="cursor-pointer rounded-tr-4 rounded-br-4 hover:bg-[#fae1af] text-[#31302e]">Sign up</button>
    </fetcher.Form  >
  )
}

export default NewsletterPage