import React, { useState, useEffect } from 'react'
import { AddBox } from '../styles/career.styles'
//아이콘
import DeleteSweepicon from '@mui/icons-material/DeleteSweep';
import axios from 'axios';

const CareerViewTable = () => {
  //데이터베이스에서 전달받은 데이터를 담을 상태변수
  const [careerList, setCareerList] = useState([]);
  return (
    <section>
      <AddBox style={{marginBottom: '50px', marginTop: '8px'}}>
        <thead>
          <tr>
            <th rowSpan={2}>회사명(활동)</th>
            <th rowSpan={2}>직책(활동내용)</th>
            <th colSpan={2}>활동 일자</th>
          </tr>
          <tr>
            <th>시작일</th>
            <th>종료일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><input /></td>
            <td><input /></td>
            <td><input type='date'/></td>
            <td><input type='date'/></td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4}>
              <button>추가</button>
            </td>
          </tr>
        </tfoot>
      </AddBox>
      <AddBox>
        <thead>
          <tr>
            <th><input type='checkbox' /></th>
            <th>회사명</th>
            <th>직책</th>
            <th>일자</th>
            <th><DeleteSweepicon /></th>
          </tr>
        </thead>
        <tbody>
          {careerList.map((e) => 
            <tr key={e.id}>
              <td><input type='checkbox'/></td>
              <td>{e.company}</td>
              <td>{e.position}</td>
              <td>
                {e.start_date} - {e.end_date}
              </td>
              <td style={{
                display: 'flex', justifyContent: 'center'
              }}>
                <DeleteSweepicon />
              </td>
            </tr>
          )}
        </tbody>
      </AddBox>
    </section>
  )
}

export default CareerViewTable