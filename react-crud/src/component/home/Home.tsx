import { useEffect, useState } from "react";
import AddEmployee from "../addEmployee/AddEmployee";
import EditEmployee from "../edit/EditEmployee";
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
  const [dataToEdit, setDataToEdit] = useState({} as IEmployee);

  const onAddEmployee = () => {
    setShownPage(PageEnum.add);
  };

  const showListPage = () => {
    setShownPage(PageEnum.list);
  };

  const addEmployee = (data: IEmployee) => {
    setEmployeeList([...employeeList, data]);
  };

  const deleteEmployee = (data: IEmployee) => {
    // To Index from array i,e employeeList
    // Splice that
    // Update new record

    const indexToDelete = employeeList.indexOf(data);
    const tempList = [...employeeList];

    tempList.splice(indexToDelete, 1);
    setEmployeeList(tempList);
  };

  const editEmployeeData = (data: IEmployee) => {
    setShownPage(PageEnum.edit);
    setDataToEdit(data);
  };

  const updateData = (data: IEmployee) => {
    const filteredData = employeeList.filter((x) => x.id === data.id)[0];
    const indexOfRecord = employeeList.indexOf(filteredData);
    const tempData = [...employeeList];
    tempData[indexOfRecord] = data;
    setEmployeeList(tempData);
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
            <input
              type="button"
              value="Add Employee"
              className="add-employee-btn"
              onClick={onAddEmployee}
            />
            <EmployeeList
              list={employeeList}
              onDeleteClickHnd={deleteEmployee}
              onEdit={editEmployeeData}
            />
          </>
        )}

        {shownPage === PageEnum.add && (
          <AddEmployee
            onSubmitClickHnd={addEmployee}
            onBackBtnClickHnd={showListPage}
          />
        )}

        {shownPage === PageEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onBackBtnClickHnd={showListPage}
            onUpdateClickHnd={updateData}
          />
        )}
      </section>
    </>
  );
};

export default Home;
