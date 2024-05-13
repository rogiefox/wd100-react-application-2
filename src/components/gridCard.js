const GridCard = (props) =>{
    return(
        <>
            <div className="col-md-4">
                <div className="card">
                    <img src={props.img} className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti quia, sed ipsum dolor excepturi mollitia eius aliquid! Tenetur iste excepturi a laudantium placeat facilis architecto perferendis officia labore numquam!
                        </p>
                        <a href="#" className="btn btn-warning">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GridCard;
