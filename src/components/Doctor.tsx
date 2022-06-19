import { FunctionComponent, useState } from "react";
import { Avatar } from 'antd';
import DoctorDetails from "./DoctorDetails";

interface DoctorProps {
    doctor: {
        id: number,
        name: string,
        specialty: string,
        ratings: number,
        score: number,
        satisfaction: number,
        hospital: string,
        qualifications: string[],
        phone: string,
        fax: string,
        profile: string,
        about: string,
    };
}
 
const Doctor: FunctionComponent<DoctorProps> = (props) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };
    return ( 
        <>
            <div 
                    className="
                        w-[48%]
                        mb-4 
                        bg-white 
                        h-[30%]
                        rounded 
                        shadow-lg
                        pt-12
                        pr-5
                        pl-5
                        pb-12
                        block
                        divide-y
                    "
                >
                <div className="w-[100%] flex justify-center pb-5">
                    <Avatar
                        size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}
                        src={props.doctor.profile}
                        className="flex justify-items-center"
                    />
                    <div className=" w-[80%] h-[100%] pt-2 pb-2 pl-7 pr-16 leading-7">
                        <h1 className="text-2xl cursor-pointer" onClick={showDrawer}>{props.doctor.name},{props.doctor.qualifications.join(',')}</h1>
                        <div className="flex justify-between pr-4">
                            <p>{props.doctor.specialty}<br/> {props.doctor.hospital}</p>
                            <button 
                            className="
                                rounded 
                                bg-orange-500 
                                border 
                                border-orange-500
                                p-4
                                text-sm text-white 
                                font-bold hover:-translate-y-1 
                                hover:scale-110 
                                hover:bg-orange-400 
                                hover:border-orange-400 
                                duration-300
                            "
                        >Request appointment</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-around pt-8"> <p className="pl-12">Phone: {props.doctor.phone}</p>  <p>Fax: {props.doctor.fax}</p> </div>
            </div>
            <DoctorDetails doctor={props.doctor} visible={visible} onClose={onClose}/>
        </>
    );
}
 
export default Doctor;