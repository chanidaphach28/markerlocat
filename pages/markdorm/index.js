import Map from "@/components/Marker/map";
import Style from "@/components/Marker/mapmark.module.css";

export default function Home() {
  return (
    <>
        <div className={Style.bor}>
            <div className={Style.text}>map nearme</div>
        </div>
      
    
     <Map/>
    </>
  );
}
