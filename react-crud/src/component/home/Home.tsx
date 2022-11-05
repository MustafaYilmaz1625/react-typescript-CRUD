import { useEffect, useState } from "react";
import AddEmployee from "../addEmployee/AddEmployee";
import {
  IEmployee,
  dummyEploeeList,
  PageEnum,
} from "../employee/Employee.type";
import EmployeeList from "../employee/EmployeeList";

import "./Home.style.css";

const Home = () => {
  const [employeeList, setEmployeeList] = useState(
    dummyEploeeList as IEmployee[]
  );

  const [shownPage, setShownPage] = useState(PageEnum.list);

  const onAddEmployee = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };

  return (
    <>
      <article className="article-header">
        <header>
          <h1>React: Simple CRUD Application</h1>
        </header>
      </article>

      <section className="section-content">
        {shownPage === PageEnum.list && (
          <>
            <input type="button" value="Add Employee" onClick={onAddEmployee} />
            <EmployeeList list={employeeList} />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onSubmitClickHnd={addEmployee}
            onBackBtnClickHnd={showListPage}
          />
        )}
      </section>
    </>
  );
};

export default Home;
