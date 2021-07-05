import React from 'react';
import { GiPalmTree } from "@react-icons/all-files/gi/GiPalmTree";
import { GiHealthNormal } from "@react-icons/all-files/gi/GiHealthNormal";
import { FaCalendarCheck } from "@react-icons/all-files/fa/FaCalendarCheck";
import { FiShare2 } from "@react-icons/all-files/fi/FiShare2";
import { FiMail } from "@react-icons/all-files/fi/FiMail";
import { FaHandshake } from "@react-icons/all-files/fa/FaHandshake";
import { FiSettings } from "@react-icons/all-files/fi/FiSettings";
import { GoPerson } from "@react-icons/all-files/go/GoPerson";
import { TiSocialInstagram } from "@react-icons/all-files/ti/TiSocialInstagram";
import { TiSocialTwitter } from "@react-icons/all-files/ti/TiSocialTwitter";
import { TiSocialFacebook } from "@react-icons/all-files/ti/TiSocialFacebook";
import { AiOutlineWhatsApp } from "@react-icons/all-files/ai/AiOutlineWhatsApp";

import {
    Link
  } from "react-router-dom";
const TeamDetail = () => {
    return (
        <>
            <div class="col-10 m-auto">
                <div class="card">
                    <div class="card-header d-flex justify-content-center">
                        <h4 className="text-center">Bornova Team Detail</h4>
                        <div class="dropdown">
                            <Link class="btn btn-light m-2 p-2 text-primary border" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <FiSettings/>                            
                            </Link>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link class="dropdown-item text-center">Edit Team <GoPerson /></Link></li>
                                <li><Link class="dropdown-item text-center">Exit Player -</Link></li>
                                <li><Link class="dropdown-item text-center">Warn Player !</Link></li>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <Link class="btn btn-light m-2 p-2 text-primary border" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                <FiShare2 />
                            </Link>

                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <li><Link class="dropdown-item text-center">With Player <GoPerson /></Link></li>
                                <li><Link class="dropdown-item text-center">Whatsapp <AiOutlineWhatsApp /></Link></li>
                                <li><Link class="dropdown-item text-center">Facebook <TiSocialFacebook /></Link></li>
                                <li><Link class="dropdown-item text-center">Twitter <TiSocialTwitter /></Link></li>
                                <li><Link class="dropdown-item text-center">Instagram <TiSocialInstagram /></Link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table table-hover table-lg">
                                <thead>
                                    <tr>
                                        <th className="text-center">Name</th>
                                        <th className="text-center">City</th>
                                        <th className="text-center">Position</th>
                                        <th className="text-center">Status</th>
                                        <th className="text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        [...Array(5)].map((teamDetail) => (
                                            <tr>
                                            <td class="col-3">
                                                <div class="d-flex align-items-center">
                                                    <div class="avatar avatar-lg">
                                                        <img src="assets/images/faces/5.jpg" alt="team-detail" />
                                                    </div>
                                                    <Link to="player-detail text-center"><p class="font-bold ms-4 mb-0">Si Cantik</p></Link>
                                                </div>
                                            </td>
                                            <td class="col-auto">
                                                <p class="mb-0 text-center">İzmir, İstanbul, Ankara</p>
                                            </td>
                                            <td class="col-auto  text-center">
                                                <p class="mb-0 d-flex ">
                                                    <span className="badge w-25 bg-success m-1">G</span>
                                                    <span className="badge w-25 bg-success m-1">SG</span>
                                                    <span className="badge w-25 bg-success m-1">SF</span>
                                                </p>
                                            </td>
                                            <td class="col-auto">
                                                <p class="mb-0 text-center"><GiPalmTree size={25} className="text-success m-1"/><GiHealthNormal size={25} className="text-danger m-1"/> <FaCalendarCheck size={25} className="text-primary m-1"/></p>
                                            </td>
                                            <td>
                                                <div className="btn-group">
                                                    <button className="btn btn-success"><FaHandshake/></button>
                                                    <button className="btn btn-warning"><FiMail/></button>
                                                    <button className="btn btn-primary"><FiShare2/></button>
                                                </div>
                                            </td>
                                        </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TeamDetail
