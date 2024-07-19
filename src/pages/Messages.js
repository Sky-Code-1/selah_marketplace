import React from 'react'
import { MdSend } from 'react-icons/md'

const Messages = () => {
    return (
        <div className='home-div-1 message-page'>
            <nav className='threads'>
                <h2>Threads</h2>
                <ul>
                    <li><button>Women's Fashion</button></li>
                    <li><button>Men's Fashion</button></li>
                    <li><button>Electronics</button></li>
                    <li><button>Home & LifeStyle</button></li>
                    <li><button>Airtime</button></li>
                    <li><button>Confectioneries</button></li>
                    <li><button>Stationery</button></li>
                    <li><button>Groceries</button></li>
                    <li><button>Beauty</button></li>
                </ul>
            </nav>
            <div className='message-content'>
                <div className='message-body'>
                    <div className='sender'>
                        <p>
                            Hello Good day I see that you're willing to make a purchase I would love to know how many it is that you'll love to buy
                        </p>
                    </div>
                    <div className='receiver'>
                        <p>
                            Hello Good day I see that you're willing to make a purchase I would love to know how many it is that you'll love to buy
                        </p>
                    </div>
                    <div className='sender'>
                        <p>
                            Hello Good day I see that you're willing to make a purchase I would love to know how many it is that you'll love to buy
                        </p>
                    </div>
                    <div className='receiver'>
                        <p>
                            Hello Good day I see that you're willing to make a purchase I would love to know how many it is that you'll love to buy
                        </p>
                    </div>
                </div>
                <div className='message-box'>
                    <form>
                        <div className='header-search-container'>
                            <input className='search-input' type='text' placeholder='Send A new Message'/>
                            <button type='button'><MdSend size={20} color='#ccc' /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Messages