import Column from "./Column"

const TableComponent = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Column/>
          </tr>
          <tr>
            <Column/>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent