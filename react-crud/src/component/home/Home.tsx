import { useEffect, useState } from "react";
import { IEmployee, dummyEploeeList } from "../employee/Employee.type";
import EmployeeList from "../employee/EmployeeList";

import "./Home.style.css";

const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEploeeList as IEmployee[]
  );
  return (
    <>
      <article className="article-header">
        <header>
          <h1>React: Simple CRUD Application</h1>
        </header>
      </article>

      <section className="section-content">
        <div>This is content part</div>
        <EmployeeList/>
      </section>
    </>
  );
};

export default Home;
