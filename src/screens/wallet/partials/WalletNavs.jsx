const WalletNavs = () => {
    return (
        <div className="col-3">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                <a className="nav-link active" id="v-pills-transactions-tab" data-bs-toggle="pill" href="#v-pills-transactions" role="tab" aria-controls="v-pills-transactions" aria-selected="true">Transactions</a>
                <a className="nav-link" id="v-pills-recurring-payment-money-tab" data-bs-toggle="pill" href="#v-pills-recurring-payment" role="tab" aria-controls="v-pills-recurring-payment" aria-selected="false">Recurring Payments</a>
                <a className="nav-link" id="v-pills-send-money-tab" data-bs-toggle="pill" href="#v-pills-send-money" role="tab" aria-controls="v-pills-send-money" aria-selected="false">Send Money</a>
                <a className="nav-link" id="v-pills-withdraw-money-tab" data-bs-toggle="pill" href="#v-pills-withdraw-money" role="tab" aria-controls="v-pills-withdraw-money" aria-selected="false">Withdraw Money</a>
                <a className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings</a>
            </div>
        </div>
    )
}

export default WalletNavs
