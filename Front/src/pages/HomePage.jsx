export default function HomePage () {

    return(
		<div>
			<header className="header mt-3 pt-7">
				<div className="container-xl">
					<div className="row">
						<div className="col-md-6">
							<div className="image-container mb-5 px-4">
							<img src="https://i.ibb.co/rtBZyJW/8-Online-Learning-isolated.png" alt="" className="img-fluid"/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="text-container p-4 d-flex flex-column justify-content-center h-100 mb-5 text-center">
								<h1 className="display-3">Lorem, ipsum.</h1>
								<p className="lead text-secondary mt-3">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est dolore nemo veritatis, quisquam quo
									facere assumenda enim, odio necessitatibus vitae, inventore ea quibusdam fugiat.
								</p>
								<div className="container text-center mt-5">
								<button className="btn btn-primary col-lg-3">Star here!</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div id="features" className="py-3">
			<div className="container">
				<div className="row g-5 py-3">
					<div className="col-md-4">
						<h5 className="fw-bold">Lorem, ipsum dolor.</h5>
						<p className="text-muted text-justify">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolores, et officiis omnis officia
							laudantium eos?
						</p>
					</div>
					<div className="col-md-4">
						<h5 className="fw-bold">Lorem, ipsum dolor.</h5>
						<p className="text-muted text-justify">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolores, et officiis omnis officia
							laudantium eos?
						</p>
					</div>
					<div className="col-md-4">
						<h5 className="fw-bold">Lorem, ipsum dolor.</h5>
						<p className="text-muted text-justify">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque dolores, et officiis omnis officia
							laudantium eos?
						</p>
					</div>
				</div>
			</div>
		</div>
		<footer className="container p-1">
			<p className="text-center small text-muted">Copyright &copy; Think Flash 2023</p>
		</footer>
		</div>
    )
}