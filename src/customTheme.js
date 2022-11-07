import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
    styles: {
        global: {
            body: {
                color: 'black',
                bg: 'white',
                maxW: '100vw',
                overflowX: 'hidden',
            },
            header: {
                position: 'fixed',
                top: 0,
                w: '100%',
                px: [4, 8],
                py: 2,
                bg: '#ffffffe6',
            },
            nav: {
                px: 4,
            },
            main: {
                px: [4, 8],
                // header padding *2 + Logo font size + logo padding *2
                my: [
                    'calc(var(--chakra-space-4)*2 + var(--chakra-fontSizes-3xl)*1.5 + var(--chakra-space-2)*2 + var(--chakra-sizes-10))',
                    'calc(var(--chakra-space-4)*2 + var(--chakra-fontSizes-3xl)*1.5 + var(--chakra-space-2)*2 + var(--chakra-sizes-10))',
                    'calc(var(--chakra-space-4)*2 + var(--chakra-fontSizes-3xl)*1.5 + var(--chakra-space-2)*2 + var(--chakra-sizes-10))',
                    'calc(var(--chakra-space-4)*2 + var(--chakra-fontSizes-3xl)*1.5 + var(--chakra-space-2)*2)',
                ],
                minH: [
                    'calc(100vh - var(--chakra-space-4)*2 + var(--chakra-fontSizes-3xl)*1.5 + var(--chakra-space-2)*2 + var(--chakra-sizes-10))',
                    'calc(100vh - var(--chakra-space-4)*2 + var(--chakra-fontSizes-3xl)*1.5 + var(--chakra-space-2)*2 + var(--chakra-sizes-10))',
                    'calc(100vh - var(--chakra-space-4)*2 + var(--chakra-fontSizes-3xl)*1.5 + var(--chakra-space-2)*2 + var(--chakra-sizes-10))',
                    'calc(100vh - var(--chakra-space-4)*2 + var(--chakra-fontSizes-3xl)*1.5 + var(--chakra-space-2)*2)',
                ]
            },
            footer: {
                color: 'white',
                bg:'black',
            },
            a: {
                color: 'black',
            },
        },
    },
    fonts: {
        body: 'Poppins, sans-serif',
        heading: 'Raleway, sans-serif',
    },
    textStyles: {
        h1: {
            fontSize: ['2rem', '2.5rem'],
            fontWeight: 800,
            lineHeight: '120%',
            letterSpacing: '-2%',
        },
        h2: {
            fontSize: ['1.5rem', '2rem'],
            fontWeight: 600,
            lineHeight: '120%',
            letterSpacing: '-1%',
        },
        h3: {
            fontSize: ['1.3rem', '1.8rem'],
            fontWeight: 400,
            lineHeight: '120%',
            letterSpacing: '-1%',
        },
        h4: {
            fontSize: ['1rem', '1.5rem'],
            fontWeight: 400,
            lineHeight: '120%',
            letterSpacing: '-1%',
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontFamily: 'Poppins, sans-serif',
                fontWeight: 600,
                textTransform: 'capitalize',
                borderRadius: 'base',
            },
            sizes: {
                xl: {
                    h: '56px',
                    fontSize: 'lg',
                    px: '32px',
                },
            },
            variants: {
                solid: {
                    color: 'white',
                    bg: 'green.400',
                    _hover: {
                        bg: 'green.500',
                    },
                    boxShadow: 'lg',
                },
                outline: {
                    color: 'green.400',
                    bg: 'white',
                    _hover: {
                        bg: 'blackAlpha.100',
                    },
                    boxShadow: 'lg',
                },
            },
        },
        Tooltip: {
            baseStyle: {
                fontSize: 'md',
                bg: 'red.400',
            } 
        },
        Badge: {
            baseStyle: {
                fontSize: '0.6rem',
                fontWeight: 400,
                borderRadius: 'full',
                minW: '0.7rem', // to avoid '1' to be too skinny
            },
            variants: {
                solid: {
                    bg: 'green.400',
                    color: 'white',
                },
                outline: {
                    bg: 'white',
                    color: 'green.400',
                    boxShadow: 'inset 0 0 0px 1px #48BB78',
                },
            },
        },
        FormLabel: {
            baseStyle: {
                mb: 0,
            }
        },
        Input: {
            baseStyle: {
                field: {
                    bg: 'green.100',

                },
                '&.test': {
                    bg: 'red',
                },
            },
            variants: {
                filled: {
                    field: {
                        border: '1px solid green.400',
                        bg: 'green.100',
                        _focus: {
                            bg: 'green.100',
                            boxShadow: 'md',
                        },
                        _hover: {
                        bg: '#c2f0d0',
                    },
                    },
                },
            },
            defaultProps: {
                size: 'md',
            },
        },
    },
});

