

const ProjectSection = () => {
    return (
        <div className='text-white flex flex-col items-center w-full h-full gap-4'>
            <h1>Projects</h1>
            <div className="flex justify-center items-center flex-col w-full gap-4 lg:flex-row">
                <div className="bg-white w-full border h-52 lg:w-3/5 lg:h-80">
                    <img alt='img' className="w-full h-2/4" />
                    <div className="p-4 h-2/4">
                        <h2 className="text-lg font-semibold text-white"></h2>
                        <p className="text-gray-600 mt-2"></p>
                        <div className="">
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hosted website</a>
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full border h-52 lg:w-2/5 lg:h-80">
                    <img alt='img' className="w-full h-2/4" />
                    <div className="p-4 h-2/4">
                        <h2 className="text-lg font-semibold text-white"></h2>
                        <p className="text-gray-600 mt-2"></p>
                        <div className="">
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hosted website</a>
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col w-full gap-4 lg:flex-row">
            <div className="bg-white w-full border h-52 lg:w-2/5 lg:h-80">
                    <img alt='img' className="w-full h-2/4" />
                    <div className="p-4 h-2/4">
                        <h2 className="text-lg font-semibold text-white"></h2>
                        <p className="text-gray-600 mt-2"></p>
                        <div className="">
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hosted website</a>
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Source Code</a>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-full border h-52 lg:w-3/5 lg:h-80">
                    <img alt='img' className="w-full h-2/4" />
                    <div className="p-4 h-2/4">
                        <h2 className="text-lg font-semibold text-white"></h2>
                        <p className="text-gray-600 mt-2"></p>
                        <div className="">
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hosted website</a>
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                Small and Simple Projects
            </div>
        </div>
    );
};

export default ProjectSection;
