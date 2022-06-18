import { FunctionComponent } from "react";
import { Button, Drawer, Space } from 'antd';

interface DoctorDetailsProps {
    visible: boolean;
    onClose: any;
}
 
const DoctorDetails: FunctionComponent<DoctorDetailsProps> = (props) => {
    return ( 
        <>
            <Drawer
                title="Doctor details"
                width={720}
                onClose={props.onClose}
                visible={props.visible}
                bodyStyle={{ paddingBottom: 80 }}
                extra={
                <Space>
                    <Button className='bg-orange-500 border border-orange-500 rounded text-white font-bold hover:bg-orange-400 hover:border-orange-400 hover:text-white ' onClick={props.onClose}>Cancel</Button>
                </Space>
                }
            >
                
            </Drawer>
        </>
    );
}
 
export default DoctorDetails;