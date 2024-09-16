import tableModel from "../models/tableModel.js";
import axios from "axios";

let updateData = [];

const getTableData = async(req,res) => {

    try {
        const response = await axios.get("https://api.wazirx.com/api/v2/tickers");
        const data = response.data;

        updateData= Object.values(data).slice(0, 10).map(item => ({
            name: item.name,
            last: item.last,
            buy: item.buy,
            sell: item.sell,
            volume: item.volume,
            base_unit: item.base_unit
        }))
        res.json({success:true,top10Data:updateData});
        
    } catch (error) {
        res.json({ success: false, error });
    }

}


export default getTableData