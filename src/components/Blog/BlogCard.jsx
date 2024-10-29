const BlogCard = () => {
  return (
    <div className="p-3 bg-zinc-100 rounded-lg hover:ring-2 hover:ring-zinc-500">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJJoot706oCprp_lFwLBvzzN2WQW_NG5dh1w&s" alt="" className="w-full lg:h-[400px] md:h-[350" />
        <div>
            <h2 className="font-semibold text-xl line-clamp-2">Title: This park is very nice</h2>
        </div>
    </div>
  )
}

export default BlogCard