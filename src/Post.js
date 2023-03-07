export default function Post() {
    return(
        <div className='post'>
        <div className='image'>
        <img src='https://miro.medium.com/v2/resize:fit:640/format:webp/1*QJnvahq_EBdUGjYQUYrhvA.png' alt=''></img>
        </div>
        <div className="texts">
          <h2>
            Get Started with MongoDB: Quick and Easy Installation Guide for The Latest version (6.0.4)
          </h2>
          <p className='info'>
            <a className='author'>Egbonu Kenechukwu</a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className='summary'>MongoDB, otherwise known as MongoDataBase is a popular and powerful open-source NoSQL database developed by a company called MongoDB, Inc., which was founded in 2007 by Dwight Merriman, Eliot Horowitz, and Kevin Ryan.</p>
        </div>
      </div>
    );
}