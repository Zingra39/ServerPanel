import { 
    HomeContainer,
    Content
} from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <h1>Nossa Ferramentas</h1>
            <Content>
                <div>   
                    <img src="https://www.hostinger.com.br/tutoriais/wp-content/uploads/sites/12/2019/05/10-Melhores-Ferramentas-de-Email-Marketing.webp" />
                </div>
                <div>   
                    <img src="https://media.licdn.com/dms/image/v2/D4D12AQGrtfR_va7sQA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1656073761623?e=2147483647&v=beta&t=jiHSeQB6ZWRxuwYItHL1YMXBPKE5w7oQQcwjB3MM6MU" />
                </div>
                <div>   
                    <img src="https://media.licdn.com/dms/image/v2/D4D12AQHjdlRf5ykb9g/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1699998418239?e=2147483647&v=beta&t=mB5Kw43OOc2EBC--iC-zz25UnDCPXe0rc6yAyr-vtfk" />
                </div>
                <div>   
                    <img src="https://media.licdn.com/dms/image/C4E12AQG1ZCbH6pbN9g/article-cover_image-shrink_720_1280/0/1583845449666?e=2147483647&v=beta&t=CaWwVn3VrfMFsKpMIT2C_UBZ5be-OH-B7PINcR3fAe8" />
                </div>
            </Content>
        </HomeContainer>
    )
}