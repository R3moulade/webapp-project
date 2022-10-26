import Tab1 from "../components/Tab1";
import { Navigate, Route, Routes } from "react-router-dom";
import Articles from "../components/Articles";
import AddArticle from "../components/AddArticle";

export default function Dashboard() {
    return (
    <>
        <h1>Dashboard</h1>
        

        <Tab1 />
        <Articles />

        {/* <Route
            path="/"
            element={
              <div className="row mt-5">
                <div className="col-md-8">
                  <Articles />
                </div>
                <div className="col-md-4">
                  <AddArticle />
                </div>
              </div>
            }
          /> */}
    </> 
)
}