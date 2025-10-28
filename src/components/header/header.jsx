import { HeaderContactsLink } from "./header-contacts-link";
import { HeaderTextButton } from "./header-text-button";
import { GitHubIcon } from "./icons/github";
import { TelegramIcon } from "./icons/telegram";

const TEST_ENABLED = false;
const basePath = import.meta.env.BASE_URL;
// const TEST_ENABLED = true;

export function Header() {
    return (
        <div className="fixed top-11 z-50  w-screen">
            <div className="mx-auto rounded-full items-center flex gap-3 px-4 py-3 bg-black w-fit">
                <HeaderTextButton page={basePath + "/"}> Йо </HeaderTextButton>
                <HeaderTextButton page={basePath + "/works"}> Работы </HeaderTextButton>
                <HeaderTextButton page={basePath + "/about"}> О себе </HeaderTextButton>
                {TEST_ENABLED && <HeaderTextButton page={basePath + "/test"}>УБЕРИ!ТЕСТ</HeaderTextButton>}
                
                <div  className="w-1 h-9 rounded-full bg-white" />
                
                <HeaderContactsLink link="https://t.me/the_g00se">
                    <TelegramIcon />
                </HeaderContactsLink>
                <HeaderContactsLink page="https://github.com/im-the-g00se">
                    <GitHubIcon />
                </HeaderContactsLink>
            </div>
        </div>
    );
}
