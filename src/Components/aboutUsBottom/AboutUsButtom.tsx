import React from 'react'
import { Break, Div } from '../../LayoutStyle'
import { Logo, Install_AboutUs, LogoMobile, LogoDesktop, Gplay_AppStore, Container, GooglePlay, AppStore, GetIt, GpImg, AppStoreImg, AboutUs, Bio, About_us, Install, Info } from './AboutUsButtomStyle'

export default function AboutUsButtom() {
    return (
        <Container>
            <Info>
                <Logo>
                    <LogoMobile src="Images/logoBig.svg" alt="epicure logo" />
                    <LogoDesktop src="Images/logo3.svg" alt="epicure logo" />

                </Logo>
                <Install_AboutUs>
                    <Install>
                        <GooglePlay>
                            <GpImg src="Images/google.svg" alt="google play" />
                            <Gplay_AppStore>
                                <GetIt>Get it on</GetIt>
                                <GetIt>Google Play</GetIt>
                            </Gplay_AppStore>

                        </GooglePlay>
                        <AppStore>
                            <AppStoreImg src="Images/apple.svg" alt="app store" />
                            <Gplay_AppStore>
                                <GetIt>Download on the</GetIt>
                                <GetIt>App Store</GetIt>

                            </Gplay_AppStore>
                        </AppStore>
                    </Install>
                    <About_us>
                        <AboutUs>about us:</AboutUs>
                        <Bio>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum non
                            eu ipsum. Cras porta malesuada eros, eget blandit
                            turpis suscipit at.  Vestibulum sed massa in magna sodales porta.  Vivamus elit urna,
                            dignissim a vestibulum.<Break />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In a lacus vel justo fermentum bibendum no
                            eu ipsum. Cras porta malesuada eros.
                        </Bio>
                    </About_us>
                </Install_AboutUs>
            </Info>
        </Container>
    )
}
