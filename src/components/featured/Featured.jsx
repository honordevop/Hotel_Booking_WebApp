import "./featured.css"

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img src="https://bstatic.com/xdata/images/xphoto/max500/161581075.jpg?k=184d27fed0c8d4ec8b858b9faba02348198cb14a30426db886e5d0f5b648562c&o=?size=S" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://bstatic.com/xdata/images/xphoto/max500/161581072.jpg?k=37c6a91722195ff04975587ec28d6e489f1e6bad8ce607c42c2f8723584d9491&o=?size=S" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>

      <div className="featuredItem">
        <img src="https://bstatic.com/xdata/images/xphoto/max500/161566253.jpg?k=05a3cf8855065648f1ba462da5b78be3187658c707200bf8028693b1863d5bda&o=?size=S" alt="" className="featuredImg" />
        <div className="featuredTitles">
          <h1>Reno</h1>
          <h2>533 Properties</h2>
        </div>
      </div>
    </div>
  )
}

export default Featured