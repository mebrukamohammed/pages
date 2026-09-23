import profile from './assets/hero.png'
function Card(){
    return(
        <div className="card">
        <img src={profile} alt="profile"></img>
        <h2> Mebruka</h2>
        <p className="card-text"> Mebruka Mohammed Ahmed , 3rd year CS student ,currently learning react and love eating food.</p>
        </div>

        

    );
}
export default Card