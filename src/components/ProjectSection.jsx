import React from 'react';
import { Fragment } from 'react';
const ProjectSection = ({ projects }) => {
    return (
        <Fragment>
            <div>
            <div></div>
            <div className="">
                <div className="">
                    <img alt='img' className="" />
                    <div className="p-4">
                        <h2 className="text-lg font-semibold text-white"></h2>
                        <p className="text-gray-600 mt-2"></p>
                        <div className="">
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Hosted website</a>
                            <a href='#' target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Source Code</a>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div>
                Small and Simple Projects
            </div>
        </Fragment>
    );
};

export default ProjectSection;
