import MainContainer from "./MainContainer";
import Sidenav from "./Sidenav";

const Body = () => {
    return (
        <div className="tw-grid tw-grid-cols-12 mt-4">
            <div className="tw-col-span-1">
                <Sidenav />
            </div>
            <div className="tw-col-span-10">
                <MainContainer />
            </div>
        </div>
    );

}

export default Body;