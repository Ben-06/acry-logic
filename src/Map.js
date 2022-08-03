function clic(id) {
    alert('clic '+id);
  }

function Area({id}) {
    return (
        <area  shape="poly" coords="185,118,126,196,155,241,248,247,276,211," href="#" onClick={() => clic(id)} />
    );
}

export default function Map(){

    const ids = [1,2,3,4,5,6,7,8,9];

    return(
        <map name="gamemap">
            {ids.map((id) =>
                <Area id={id} />
            )}
            
            
        </map>
    );
}