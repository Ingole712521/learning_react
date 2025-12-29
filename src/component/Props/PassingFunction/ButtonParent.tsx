
import ButtonChild from './ButtonChild';

const ButtonParent = () => {

    const handleClick = () => {
        console.log("Button CLicked");
        alert("Button CLicked")
    }


    return (
        <div>
            <ButtonChild onClick={handleClick} />
        </div>
    )
}

export default ButtonParent