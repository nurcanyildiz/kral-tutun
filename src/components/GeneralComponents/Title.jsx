function Title({title, subtitle}) {
    return (
        <>
            <div className='sectionTitle' style={{textAlign:"center", marginTop: "30px"}}>
                <h1 className='title'>{title}</h1>
                {subtitle ? <p className={'subtitle'}>{subtitle}</p> : null}
            </div>
        </>
    )
}

export default Title;
