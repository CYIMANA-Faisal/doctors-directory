import { FunctionComponent } from "react";
import { Button, Drawer, Space, Image, Rate, Slider } from 'antd';
import './doctors.css'

interface DoctorDetailsProps {
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
        profile: string
        about: string,
    }
    visible: boolean;
    onClose: any;
}
 
const DoctorDetails: FunctionComponent<DoctorDetailsProps> = (props) => {
    return ( 
        <>
            <Drawer
                className="scroll"
                title={`You are viewing ${props.doctor.name} details`}
                width={720}
                onClose={props.onClose}
                visible={props.visible}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                <Space>
                    <Button className='bg-orange-500 border border-orange-500 rounded text-white font-bold hover:bg-orange-400 hover:border-orange-400 hover:text-white' onClick={props.onClose}>BOOK AN APPOINTMENT</Button>
                </Space>
                }
            >
                <div className="flex flex-wrap justify-between">
                    <div className="w-[30%] mb-4 h-2/5">
                        <Image
                            width={200}
                            height={200}
                            src="error"
                            fallback= {props.doctor.profile}
                        />
                    </div>
                    <div className="w-[65%] h-[30%] mb-4 pl-5">
                        <h1 className="text-3xl font-bold ">{props.doctor.name}</h1>
                        <p>{props.doctor.qualifications}</p>
                        <p className="text-lg font-serif font-bold pt-2">GOOD RATING:<br></br> <Rate disabled allowHalf defaultValue={props.doctor.ratings} /></p>
                        <p className="text-lg font-serif font-bold pt-2">TOTAL SCORE: <Slider defaultValue={props.doctor.score} disabled={true} tooltipVisible={props.visible} /></p>
                        <p className="text-lg font-serif font-bold pt-2">SATISFACTION: <Slider defaultValue={props.doctor.satisfaction} disabled={true} tooltipVisible={props.visible} /></p>
                    </div>
                    <div className="w-[100%] h-[30%] mb-4 pt-7">
                        <h1 className="text-4xl text-orange-500 underline font-bold font-serif">About</h1>
                        <p className="font-serif p-4 text-gray-600 text-lg">
                           {props.doctor.about}
                        </p>
                    </div>
                </div>
            </Drawer>
        </>
    );
}
 
export default DoctorDetails;