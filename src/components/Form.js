import { useDispatch,useSelector } from "react-redux";
import { add,subtract } from "../state/amountSlice";

function Form() {
  const dispatch = useDispatch()
  const amount = useSelector(state=>state.value)

  const eventTrigger =(e,callback)=>{
    e.preventDefault()
    dispatch(callback(50))
  }


  return (
    <>
    <form action="submit" className="flex h-20 justify-center items-center">
      <button type="submit" className="bg-[red] text-slate-100 w-3 p-2" onClick={(e)=>eventTrigger(e,add)}>+</button>
      <input disabled type="number" name="amount" id="amount" className="w-[20vh] rounded-sm" value={amount} />
      <button type="submit" className="bg-[red] text-slate-100 w-3 p-2" onClick={(e)=>eventTrigger(e,subtract)}>-</button>
      </form>
    </>
  );
}

export default Form;