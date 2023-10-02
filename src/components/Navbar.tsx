import { HomeOutlined, MenuOutlined, ScheduleOutlined } from "@ant-design/icons";
import './Navbar.css';
import { Button } from "antd";

function Navbar() {
    return (
        <div className='navbar'>
          <div className='nav-section'>
            <Button type='text' size='large' icon={<MenuOutlined />} />
            <div className='button-duo flex-col justify-center items-center'>
                <Button type='text' size='large' icon={<HomeOutlined />} />
                <Button type='text' size='large' icon={<ScheduleOutlined />} />
            </div>
          </div>
          <div className='mb-5'>
            <div className='circle-icon' />
          </div>
        </div>
    );
}

export default Navbar;
