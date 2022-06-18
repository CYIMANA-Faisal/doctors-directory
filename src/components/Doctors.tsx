import { FunctionComponent, useState } from "react";
import './doctors.css'
import doctors from './../data/doctors';
import DoctorDetails from './DoctorDetails';
import Doctor from "./Doctor";

interface DoctorsProps {
    
}

const Doctors: FunctionComponent<DoctorsProps> = () => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    
    return ( 
        <div 
            className="
                h-screen 
                flex
                flex-wrap 
                justify-around 
                mt-0 mb-0 ml-auto mr-auto 
                w-5/6 
                overflow-y-auto
                !scrollbar-thin !scrollbar-thumb-gray-400 !scrollbar-track-gray-100
                pt-5
                pb-5
                scroll
            "
            // style={{--scrollbar-thumb: #3f51b5 !important}}
        >
            {
                doctors.map((doctor) => (
                    <Doctor doctor={doctor} showDrawer={showDrawer} key={doctor.id}/>
                ))
            }
            <DoctorDetails visible={visible} onClose={onClose}/>
        </div>
    );
}
 
export default Doctors;