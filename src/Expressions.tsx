export default function Expressions(){
    const subtext = 'This is my subtext'
    const reactLogoURL = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AReact-icon.svg&psig=AOvVaw16xcI9R7gjeAd-rkI-QOj1&ust=1717385241619000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCIi2sNv8u4YDFQAAAAAdAAAAABAE';
    
    const duplicate = (value: number) => value * 2;

    return (
        <>
            <h1>Expressions example</h1>
            <h2>{subtext.toUpperCase()}</h2>
            <h3>The double of 3 is equal to {duplicate(3)}</h3>
            <img src={reactLogoURL} alt="react logo" />
        </>
    )
}