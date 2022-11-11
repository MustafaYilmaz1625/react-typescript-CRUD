import { useState } from "react";
import EmployeeModal from "../modal/EmployeeModal";
import { IEmployee } from "./Employee.type";
import "./EmployeeList.style.css";

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void;
  onEdit: (data: IEmployee) => void;
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;
  const [showModal, setShowModal] = useState(false);
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null);

  const viewEmployee = (data: IEmployee) => {
    setDataToShow(data);
    setShowModal(true);
  };

  const onCloseModal = () => setShowModal(false);

  return (
    <div>
      <article>
        <h3 className="list-header">Employee List</h3>
      </article>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
          {list.map((employee) => {
            return (
              <tr key={employee.id}>
                <td>{`${employee.firstName} ${employee.lastName}`}</td>
                <td>{employee.email}</td>
                <td>
                  <div>
                    <input
                      type="button"
                      value="View"
                      onClick={() => viewEmployee(employee)}
                    />
                    <input
                      type="button"
                      value="Edit"
                      onClick={() => onEdit(employee)}
                    />
                    <input
                      type="button"
                      value="Delete"
                      onClick={() => onDeleteClickHnd(employee)}
                    />
                  </div>
                </td>
              </tr>
            );
          
        })}
        </tbody>
      </table>
      {showModal && dataToShow !== null && (
        <EmployeeModal onClose={onCloseModal} data={dataToShow} />
      )}
    </div>
  );
};

export default EmployeeList;
