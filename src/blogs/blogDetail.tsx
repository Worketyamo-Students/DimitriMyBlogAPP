import Comments from "../components/comments"
import Header from "../components/header"
import FormComment from "../components/form-comments"
const BlogDetailPage = () => {
  return (
    <>
    <Header/>
        <div className="max-w-4xl mx-auto py-8 font-inter">
        <h1 className="text-3xl font-bold ">Post one</h1>
        <p className="text-[#5100B1]">Written by: john doe</p>
        <div className="mt-4">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        </div>
        <Comments />
        <FormComment/>
    </div>
    </>

  )
}
export default BlogDetailPage
