import RecurringPayments from "../tabs/RecurringPayments"
import SendMoney from "../tabs/SendMoney"
import Settings from "../tabs/Settings"
import Transactions from "../tabs/Transactions"
import WithdrawMoney from "../tabs/WithdrawMoney"

const WalletActions = () => {
    return (
        <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-transactions" role="tabpanel" aria-labelledby="v-pills-transactions-tab">
                    <Transactions />    
                </div>
                <div className="tab-pane fade" id="v-pills-recurring-payment" role="tabpanel" aria-labelledby="v-pills-recurring-payment-tab">
                    <RecurringPayments />    
                </div>
                <div className="tab-pane fade" id="v-pills-send-money" role="tabpanel" aria-labelledby="v-pills-send-money-tab">
                    <SendMoney />    
                </div>
                <div className="tab-pane fade" id="v-pills-withdraw-money" role="tabpanel" aria-labelledby="v-pills-withdraw-money-tab">
                    <WithdrawMoney />
                </div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                    <Settings />
                </div>
            </div>
        </div>
    )
}

export default WalletActions
