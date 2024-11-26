import React from 'react';
import csss from './footer.module.css'


export default function Footer(){
    return <>
    <div className={`${csss.bgg} text-white`}>
        <div>
            <div className="container">
                <div className="row">
                    <div className="cal-me-12 p-3">
                        <div> 
                            <h4 className='text-center'>Copyright © Your Website 2021</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>
};
