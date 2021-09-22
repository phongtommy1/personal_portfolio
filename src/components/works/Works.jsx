import './works.scss'
import { featurePortfolio, webPortfolio, mobilePortfolio, etcPortfolio } from '../../data'
import { useState } from 'react';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: '1',
            icon: "./assets/skill.png.png",
            title: 'Skills',
            desc: "Coding languages and Others: Java, Python, JavaScript, HTML, CSS, MongoDB, ExpressJS, NodeJS, Bootstrap, Git, SQL",
            img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATIAAAClCAMAAADoDIG4AAABQVBMVEX/tqv/bVZDruP/ua3/uq5Esef/b1banpj/u695e5D/u7CrUU//alMseKL/uqz/i3qrgIGjXV2lfoDQmJS+jIv0r6X1alX/t6eyhYaiT062VVCWdHlYepmeeX3mpp/JlJGgsc3KXFEqc5zitLcoreflZVT/Zk6cTU4vf6r/w7XDWVGKSE3UX1I+o9XBiIORSk3/g3D/rqLLtL+FsNSussl4YmxjVWP/fGiLbXTloJWbcHC3jY3Yl487dZofkcT/l4iVf4n/p5rwuLWHW2LlXkyJUVdCQ1fklYyjbG0AgLOCdIMAjsOYe4NgaYDRkoqMYmjMUURjNkQ4ZYdjd5J7S1S1SEF3bHtVWnAlZ41yb4FoepRrsNzrhnlXWGxtjq7Oc2txVFyMPUKudXXGe3aUsdCvXVvokofWtLyJQEWbXWA1XX2afQJrAAAP4klEQVR4nO2djV/aSLfHE08yTCGkNEAMYKBaEFSQ0q0t+MLaVp/bN1vXrnvd3ee5d1/v3r3//x9wZ/I6k0wQ++y2TczvUxWJWvh+zjlz5syZiSTlypUrV65cuXLlypUrV65cuXLlyvWpVSh87leQNkGhAJ/7NaRMObIbK0d2Y+XIbqxEZKAo4H7NkfJKQoarhnEAANIzu4M/9Yv6gqRIDx4/fsQ9lYAMXpxr2sm4eneTfDlt3zpDA8l5y4q0Jz3qdr9a5a4JkeEXmkyEeu6XnduGDAypUgdFallPlkQGnROZlVa5bcy2/lHFBdumkWk5x1RsjUMmvyx+qtf6ZQgqhWmd8hJeFFrZf9xyZARBsl8lhP/NW+2YHC9ibAp/VYgM7rLMblv4h93D4A0rULONFscswcqKD0NmqHG7kgw47r6aSW1Xe5KBscG9/6RUthjYGRrfLmKS/rr7ZiZ1HBWeLI9MKj7T6BiATl7Ubxcxorc1hYYwR4plGNNlHJNekZ5uyqhp3cLp0keFf+dz8WvtRVuJX82c4n4UxcRdEyGrWx6zTvxv1f+tF/dFCirVCCDo2FPJS2UhltLW4wzIDMt/FL2kVLOYouEoM7C32tW2XcGAoXN8/Pba9wx2klUSYpkMbVFmrpUp9WlnT3rbVcv6Nb8PtXbClawSEzCTnG9x+4n0Vr0emdJK4JJdYgSOFY1nrhTFWls7uw5ZkpSqIOHITGRLYkbD/19JDBQjMyNoIjNXoFMxFgK4iIsLUzARMdyZ1qeZ8dWFzPDseK189PpdYHD44GW/cc9uJ799ATHcfn9u4Wo1+75J5p3TNyrV/Mz9HtqnJzKSkXZpJzGLEwNoXSL0Tb3YygwyATNwvRF/31VXqFT1wnm+PUZe0cIkbqZgXIxSiBEDfNDX0PZY3i9M/8b38CnEvtcIM5CMtXL5g6VXuiu+1O8wXU5CQW3s5ACMe42Hd59xlesYMVw9PUG9nR4yv62mPJYBnRwG2DhmyuFGl3pj9+JIDZG9mfHLSeiUGI+saZsPmb8aJUaDGDLH20hrWDjVbgk0idV1HFZ3GGZw+MrzxvloJZRqQHGfLfOv97xy/9OwlssTA7CbCJUaCF22Fsz30yCw8GrlYu3OPlNExZZfi4Arz7bUssoiew34HovM3PaXSO76v9lhiblBbH1sot77BQNsOgSF/QvqeqPv9NA3FW+6CLu+bUWQ3YHiPcQia/qPNv2/wZbMcMEJYkMk72ShVUP/oK440crw612h4LV6Y2TPYv8DrpMgJvebJIgZ6Q5irpTDubpyVjlS1Y1a7CL8cGNk2q8RKFC0SySI9WUSxOrpDmKu2p2pqh7peDZX57OYBeh3bo4sWjVrf0OC2I6JTl6kPoi5qrdbycgA794YmXnAdxXAdP+EBDFtfJANYBJNIwLHtCKX8Ozth4F4xExEhvp3n7FFb9yS4Bvil+kPYhB+xmfi8K/MzuaqWh55edlgKWRo2NQ25a8DQ4NqC2MrC0EMnLwLOs6nSjzJIMK7r1RCSb0aqS7SZZCh9QZ9dvNp8B89mRpGJQtBDCyJTLWxE6lJohRNZYmUd29889qYj+blcnkwUq9B1muO190nNeT/HaxEF6dS2niMD//zqHx0Z59WvuITJqr6qyDwq1fU0tSVwcZiZOa6GTylPU1oLQNcaKWuVAa042LuuNroYuY2xNZAkjhi+PvApKhrug8WOGZvXea12RIxUySrVU3dQACdNj7r+uPgRl3iqhi+GCO7YlklIEMlOapSfMWcGJhRT6NbQu1J1/E3SkK9MIQ/ExTH1Pk8Towiw78zfNAYRZGdHPBsFLBanTTyckTzBbV8Z4063OidsH8/nFtuCIhRZHBXY4iZMSvjZgGA27ZdT51H+oJdYkHq2aqu74/omxettunB3HKlfC0yhMa9GDFZY3qLodaqpblGBm9JnuVMjvQj8uhoMbKRyC85ZCS1iNsYh6zdaqfWwKgAHxNQr+jGBwqGIBO8Gz1wzNFIQIxFVto2Y3HMQWYwVvbp3t7fIKgaT2gI28USTAYUWUXQx/S8LAIVRYZciYAR49v+DO/ubxItWhAz260fXtBh4K1gMrP642gg8kcO2T/7DVeCQEb7sROz2RRKd1CtvKEDpvpqJviJB1316jpk+CVaZGVmHwnqs2kVzJzpo/PRFXU4rd5XFwJzke2juPho9nW6YxgrbL1ymaijfwmI6av/NaCT8AXYXMcsRdVnfXRY+u/FHS6p0nT2Yd4lU8yN3U5sigyT14MRMcH5xoJwxoV/Rnxc6zXsBdug0iSoSqDPdvcq73RQoshgVvYsUB1dhcWM4IFbOItk/2HQ73O+ibRxUjNoyuQWYytOehmzgnASrq5c+SvlA++ZwUa5XN4gPpuErBEdDEz/7yp1z+LccRQgfYVaiDfnE61+xTmgM8FUB3MPnlM3U9XBIAmZHEOmPfQQWZcl+j/CBE3ol07pspI+ZqIn/+iyxNQBzf1V4qo0tSWJR2B1QmTm+k4copdqQIlMRYuEmKZpEywVxwg1MxHnIkbmTso9ZC4/l1n5ji5A1usJcjTtoRsHaHmoVZzQXzLtYsuU0TgDKwIEWXRkZJGxZaCfsNgxRXI8k7Y8opNt93fMEnmckTMhit1kZGwZSP1eZGUyzWVjswGvrwXwwRCFPzg8SHVxIxD8EkG2wsYyJk8Th39UItltox9xzxN/nNnqM8/2tz7vW/2rFPZGRUzNcczyNcjMHdPJZ5sljtm5t6cOG+wpGmbSXpQvVCASvRCukgiQbVyDbMfvNh42WWbeugm2zjmSJ4lt3F+ioFCJi67LOb1mQmRz6qShZwqQodDtUIkt07530MBBSMx5gE6MNOVliVbm9LQIkLllj3KwXi6yMjaLDR+jS3fKVPzZfwqt33PGAfRzJuK/hKfdGLMgiKmDsjfdFCAbDhmLC5ARW3L9D6q+tw47WwfnlKVw+pFC4e9GUWZh3KdNBo4ZipAxzoj8AQD1giivdFxmqLFFtwwQYmmKZYsEs6vyCl8q44bKiJWJS7KulSFk9r8NKxlK59y5aE6LSntnvHB/WbpExsVBeWOegIyPZajXbwqZUWTDRqMpo9PQlrbG3tV+TSnGNu+kVk5ngZpsZRwy1GgKK//eiOlcC/oMAFo92fXljEzIPelr4hFThAztiFcwUY/NZb0VYOj0Ca+7DjTUzxQyQT8BF8sYZKXIahxyAxif/aN7LjLcR7I2KUqmJmtmVsZKR6uC9J9Bpnppm4uML1qbjQbJM2JzzIYbzAgytEPpmRpK+ep5RBErG7lNQmqUHkGm/BKJXyUvq+ed1bcy4phjd7L5cOELSJ/c/hWmg5H2Og5EyIoveWKi8iLVvrdmDv4gmSkTk7xaBttdcFUus6EsRMbvlOs1BcRoa+N56hpjl1Ww3qhfqFxzgcrltSyyP1kj6wttbAdp77OS40dVqAYHRdU3BsL+qJhjsltY44txjobD06zamFS3nvjWAJMFHSxs+P+VyTFQSZyh/ZRZYkqnFjaZTURlRgbZaMVLMpiW4gRkcik7/VKOoK24IYwQw8GBMjCLl8yCGZQ6mKtXPrJhM4YsCu4yM+fUOIKOYdtVUIASY54+HPmB3wc2L2/MA2Ybo6AnYxhFFjO2daeQUUh3q2wgaBtYUQq23eGISZJnZcyRBfQEFr/w7xV/7ktcvcxHFhkF/Pl3LcUd/6ycg4oAcDtyyoc3AeAb/tUR3/9/f1WIrB9N/b2SLG6ndF8JKzwN3oB7XlRwxe/G5qdOKp96iJHJw3UOmRauiChSpVVItX9iOwzM+hnJ8JkT3ZyVudhGHN7qEpChHdbM+CIP4GrLklJbi4WaO49ZJaI1MlVdC9+dYtGW7YEgv7gWmWyymcd5pMgDSt22UzsUuCelPP/t/v3fVmlZkUUmYeONGqsrLodM7gXM0KVgA74CqR0K3Bf9oLuy0o0jk/C7o1jj/5LIiJ01aZ1ROz8tCKeXdIthKkuMirPYm4SMjAiHP32UY9LHvUajUbIX7FRNp5VNDcOoQSIyekjL6COROVVGlJ0VJE/1GgZsLEIWK2lzyJxdv3IE2bonOWhdzJLqNZBgMbJoR0scGbdRGpk7PU/k+80MbSzxtASyaK/Zdci22Uq2ljlioWMSrUbzMk/O7rCbWFnYlJFBI5OklhP+nz8iIuZ2fHxsxN4kHL5Rb4BMNoPChmayZbKs0FPYE/yB/ca9TIs2uMU2Tl2LjHHLCfOnIHaOXCblncWof8cwu37E9IFpE25qGbffDCo48VNvhXNzblquvgXMrWOGhTLNnHDrlVDzHgjuQ5EZMWekkplT19+Fw1Z/5u8ALCaVDc5I1YJ9q1Dw/oj3PU77ccULxJ3EC/ru2hv3eLMfwxFUvdDJpbBogU6fbjp6+nUQ7aHjm5fbhVvLrpFFz8gGvb5rHx/bu6szfz6glmfOZrdLv71zXC9Kk2fPJsBOkxR6GiZgaBfqdADNbkQTncTudWzD7Mo9+/lq5i1M0VOeZdlM2I1ET/mqviydn1/+PsnY4hyrhef9g1T5UC7/YAWRHYw/G42XB4k8cMtr9t/M3pzT1zV3lfDPsQ9ET6xPLvLg98EIwZydnS3FiHkZ7sdtqocDZtPSpnN2dkZ254eK25jtrKq07aXSUeZnnNlEkTvUjO4xpHcO/gtf7+dX7D5MuKXgKQaYbkn29Ysc7bA8DZZBl2O4jQFOwpYxK4vdIa1QmLYL00KhYxTol+veLWa2C4JErPPZpiz3+rFT7bOjGLG63TamBXoX1mmFfrpuBTJ2gzSCDPWdngNaFspeoTZ+58L6nmVNDbrv0NqjH/x6kejOhZEDxSfEyob9HYR2SsNMWlns/pj1GgBWaB5BE9klblyrRGI7OKcV9BvfrveaBNn/ZA5ZTPUatgwDG4YFfzx6oC9xr992jf8ZusupQf4Nt4lz9lK5eHkzEWTGFkG2VdG/6j5eBhmO7hfXaDAznVoaeoEzN2DGRJBNrb2tPWuqP/7x0TLIoMMPAPhXubeNmjT4ox0S++rTWraZkVimr+oS/ZAmkrLMTbgV/n7wuEH9so9kZJ46oRJn5JypJNVr+m8rj1fJh77XmS5133LgjkKG6vvG/yKzidb/zM4dJRaKIPuqe3+VfOhOTFsCmVRnY7xib+HC/jfnmpG5boMEEcd88Mdz6fkfz6FmdZZDxt9kYc9oY4yrT7Jbj42IjpgVC9vHFq5Uaksi437GwB3baG8l3mg6c3KTDP2o+wNe2jE5QadK0uDO3u1YyKQiyEiCsfV/r85oovERyMis0zbqNcHNkbMqggwrGLBOPsis6SOQSaBIVuHWuKXktu2F4isZyyGTsrywJJLCHQkUqXAviyyXrxzZjZUju7FyZDdWjuzGypHdXIXC534FuXLlypUrV65cuXLlypUrV65cuW6h/h8nOnVgbjb4bgAAAABJRU5ErkJggg=="
        },
        {
            id: '2',
            icon: "./assets/web.png.png",
            title: 'Web',
            desc: "Yelp_Camp a full-stack project utilizing the MERN stack that allows user to leave a review on visited campgrounds.",
            img: "https://images.unsplash.com/photo-1526491109672-74740652b963?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1700&q=80'"
        },
        {
            id: '3',
            icon: "./assets/phone-removebg-preview.png",
            title: 'Mobile',
            desc: "Twitter Clone, replica of Twitter that allows user to post directly to their timeline using Twitter API. ",
            img: 'https://images.unsplash.com/photo-1603145733316-7462e5ecd80d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'
        },

    ];

    const handleClick = (dir) => {
        dir === 'left'
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) :
            setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };
    return (
        <div className="works" id='works'>
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {data.map(d => (
                    <div className="container">
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <div className="imgContainer">
                                        <img src={d.icon} alt="" />
                                    </div>
                                    <h2>{d.title}</h2>
                                    <p>{d.desc}</p>
                                    <span>Projects</span>
                                </div>

                            </div>
                            <div className="right">
                                <img src={d.img} alt="" />
                            </div>

                        </div>
                    </div>))}
            </div>
            <img src="assets/arrow.png" className='arrow Left' alt="" onClick={() => handleClick('left')} />
            <img src="assets/arrow.png" className='arrow Right' alt="" onClick={() => handleClick()} />
        </div>
    )
}
