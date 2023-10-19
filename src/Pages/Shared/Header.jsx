import Marquee from "react-fast-marquee";


const Header = () => {
    return (
        <Marquee speed={100}>
            <div>
            <div className="bg-[#ffffff] px-1 py-3">
                <ul className="flex justify-between items-center space-x-3">
                <li>Desktop</li>
                <li>Laptop</li>
                <li>Component</li>
                <li>Monitor</li>
                <li>UPS</li>
                <li>Phone</li>
                <li>Tablet</li>
                <li>Office</li>
                <li>Camera</li>
                <li>Software</li>
                <li>Gadget</li>
                <li>Storage</li>
                <li>TV</li>
                <li>Gaming</li>
                <li>AC</li>
                <li>Security</li>
                <li>Accessories</li>

                </ul>

            </div>
        </div>
        </Marquee>
    );
};

export default Header;