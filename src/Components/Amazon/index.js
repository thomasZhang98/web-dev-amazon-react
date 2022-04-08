import {Provider} from "react-redux";

const Amazon = () => {
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2">
                    <NavigationSidebar active={"home"}/>
                </div>
                <div className="col-10">
                    <Outlet/>
                </div>
            </div>
        </Provider>
    )
}

export default Amazon;