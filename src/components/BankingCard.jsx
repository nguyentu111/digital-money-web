import Chip from "../assets/svgs/chip.svg";
function BankingCard() {
  return (
    <div className="p-4 bg-black text-white rounded-lg flex flex-col min-w-[300px]">
      <div>
        <span className="font-bold text-lg uppercase">Agribank</span>
      </div>
      <img src={Chip} className="py-4 w-16 h-16" />
      <span className="font-bold  uppercase [word-spacing:10px] text-xl tracking-widest">
        1231 1231 1231 2343
      </span>
      <span className="uppercase">NGUYEN ANH TU</span>
    </div>
  );
}

export default BankingCard;
