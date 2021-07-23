import React from 'react'

const Yearly = () => {
    return (
        <div class="card-body">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="home-tab" data-bs-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">With Ball</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">Coordination</a>
            </li>
            <li class="nav-item" role="presentation">
                <a class="nav-link" id="contact-tab" data-bs-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Strength</a>
            </li>
        </ul>
        <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                <p class="my-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla ut nulla
                    neque. Ut hendrerit nulla a euismod pretium.
                    Fusce venenatis sagittis ex efficitur suscipit. In tempor mattis
                    fringilla. Sed id
                    tincidunt orci, et </p>
            </div>
        <div class="tab-pane fade active show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            Integer interdum d
            Ut finibus risus sed massa
            mattis porta. Aliquam sagittis massa et purus efficitur ultricies. Integer
            pretium dolor
        </div>
        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <p class="mt-2">Duis ultrices purus non eros fermentum hendrerit. Aenean
                ornare interdum
                placerat ut.</p>
        </div>
        </div>
    </div>
    )
}

export default Yearly
