import React from 'react'

const PriceInfo = () => {
    return (
        <div class="row p-5">
            <div class="col-12 col-md-8 offset-md-2">
                <div class="pricing">
                    <div class="row align-items-center">
                        <div class="col-md-5 px-1">
                            <div class="card">
                                <div class="card-header text-center">
                                    <h4 class="card-title">Basic</h4>
                                    <p class="text-center">A standart features you can get</p>
                                </div>
                                <h3 class="price text-center">$100</h3>
                                <ul>
                                    <li><i class="bi bi-check-circle"></i>Lorem ipsum dolor sit amet</li>
                                    <li><i class="bi bi-check-circle"></i>Lorem ipsum dolor sit </li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="col-md-5 px-1">
                            <div class="card">
                                <div class="card-header text-center">
                                    <h4 class="card-title">Professional</h4>
                                    <p class="text-center">A higher features you will need</p>
                                </div>
                                <h3 class="price text-center">$100</h3>
                                <ul>
                                    <li><i class="bi bi-check-circle"></i>Lorem ipsum dolor sit amet</li>
                                    <li><i class="bi bi-check-circle"></i>Lorem ipsum dolor sit </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PriceInfo
