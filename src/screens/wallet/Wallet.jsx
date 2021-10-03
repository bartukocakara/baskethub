import WalletBody from "./partials/WalletBody"
import WalletBalances from "./partials/WalletBalances"

const Wallet = () => {
    return (
        <div className="row">
           <WalletBalances />
           <WalletBody />
        </div>
    )
}

export default Wallet
