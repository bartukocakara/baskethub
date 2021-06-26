import React from 'react'
import {
    Link
  } from "react-router-dom";
const Year = () => {
    return (
        <div>
            <table class="table table-bordered mb-0">
            <tbody>
                <tr className="court-calendar p-2">
                    <th><Link to="month">Ocak</Link></th>
                    <th><Link to="month">Şubat</Link></th>
                    <th><Link to="month">Mart</Link></th>
                    <th><Link to="month">Nisan</Link></th>
                </tr>
                <tr className="court-calendar p-2">
                    <th><Link to="">Mayıs</Link></th>
                    <th><Link to="">Haziran</Link></th>
                    <th><Link to="">Temmuz</Link></th>
                    <th><Link to="">Ağustos</Link></th>     
                </tr>
                <tr className="court-calendar p-2">
                    <th><Link to="">Eylül</Link></th>
                    <th><Link to="">Ekim</Link></th>
                    <th><Link to="">Kasım</Link></th>
                    <th><Link to="">Aralık</Link></th>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Year
