import WalletActions from "./WalletActions"
import WalletNavs from "./WalletNavs"

const WalletBody = () => {
    return (
        <div className="card" >
            <div className="card-body">
                <div className="row">
                    <WalletNavs />
                    <WalletActions />
                </div>
            </div>
        </div>
    )
}

export default WalletBody
