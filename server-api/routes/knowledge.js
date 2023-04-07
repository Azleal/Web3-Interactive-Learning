const dialogs = [{"id":1,"title":"Web3介绍","dialog":[{"id":1,"type":"knowledge","data":"Hi 非常欢迎您来开始进入Web3🌐的世界 🚀","path":[{"from":1,"to":2}]},{"id":2,"type":"knowledge","data":"我们可以将过去短暂的互联网历史分为两个时期—Web 1.0 和 Web 2.0 🔗","path":[{"from":2,"to":3}]},{"id":3,"type":"knowledge","data":"比如 Web1.0时期(1990-2004)，这个时期的互联网的特点：只读。👀","path":[{"from":3,"to":4}]},{"id":4,"type":"choices","data":[{"choice":"🕸️ 没用过Web1.0，不是很了解......","path":[{"from":null,"to":5}]},{"choice":"我有听说过！🧐","path":[{"from":null,"to":5}]}]},{"id":5,"type":"knowledge","data":"Web1.0主要是由公司拥有的静态网站，用户之间的互动几乎为零 ❌","path":[{"from":5,"to":6}]},{"id":6,"type":"knowledge","data":"个人很少创造内容，导致它被称为只读网络。🚫🗣️","path":[{"from":6,"to":7}]},{"id":7,"type":"choices","data":[{"choice":"😢 还蛮遗憾的。","path":[{"from":null,"to":8}]},{"choice":"💻 那Web2.0又是什么呢？","path":[{"from":null,"to":8}]}]},{"id":8,"type":"knowledge","data":"是的，接着迎来了Web2.0时代。🎉","path":[{"from":8,"to":9}]},{"id":9,"type":"knowledge","data":"Web2.0（2004 年 - 至今），特点：能读能写。","path":[{"from":9,"to":10}]},{"id":10,"type":"knowledge","data":"网络不再是只读的，它演变成读写网络。 ","path":[{"from":10,"to":11}]},{"id":11,"type":"knowledge","data":"互联网公司除了向用户提供内容外，还开始提供平台来共享用户生产的内容，并参与用户间的交互。👀💬💻","path":[{"from":11,"to":12}]},{"id":12,"type":"image","data":"https://ethereum.org/static/9f50d47733edad715c3068c4c6a8bc6d/00d43/web2.png","path":[{"from":12,"to":13}]},{"id":13,"type":"choices","data":[{"choice":"🌐 有什么应用是Web2.0的呢？","path":[{"from":null,"to":14}]},{"choice":"🤩 和我理解的一样！","path":[{"from":null,"to":17}]}]},{"id":14,"type":"knowledge","data":"📱社交网络：如WeChat、QQ等。","path":[{"from":14,"to":15}]},{"id":15,"type":"knowledge","data":"📹视频分享：如B站、抖音等。","path":[{"from":15,"to":16}]},{"id":16,"type":"choices","data":[{"choice":"💡 这些我都在用的！","path":[{"from":null,"to":17}]},{"choice":"🚀 后来呢？","path":[{"from":null,"to":17}]}]},{"id":17,"type":"knowledge","data":"到了Web 3.0，用户对于个人数据有了更多的控制权和选择权🔐🔀。","path":[{"from":17,"to":20}]},{"id":18,"type":"image","data":"https://ethereum.org/static/54eef2049c233f9868af91546a07b2c7/00d43/web3.png","path":[{"from":18,"to":20}]},{"id":19,"type":"knowledge","data":"Web 3.0：能读🔍 - 能写💬 - 能拥有🤝。它的核心思想有以下：","path":[{"from":19,"to":20}]}]}]
    { 
        "id":1,
        "title":"Web3介绍",
        "dialog":[
        
            {
                "id":1,
                "type":"knowledge",
                "data":"Hi 非常欢迎您来开始进入Web3🌐的世界 🚀",
              "path":[
                    {
                        "from":1,
                        "to":2
                    }
                ]
            }, 
            
            {
                "id":2,
                "type":"knowledge",
                "data":"我们可以将过去短暂的互联网历史分为两个时期—Web 1.0 和 Web 2.0 🔗",
              "path":[
                    {
                        "from":2,
                        "to":3
                    }
                ]
            },
         
            {
              "id":3,
              "type":"knowledge",
              "data":"比如 Web1.0时期(1990-2004)，这个时期的互联网的特点：只读。👀",
            "path":[
                  {
                      "from":3,
                      "to":4
                  }
              ]
            },
         
            {
                "id":4,
                "type":"choices",
                "data":[
                    {
                        "choice":"🕸️ 没用过Web1.0，不是很了解......", 
                        "path":[
                            {
                                "from":"none",
                                "to":5
                            }
                        ]
                    },
                    {
                        "choice":"我有听说过！🧐",
                        "path":[
                            {
                                "from":"none",
                                "to":5
                            }
                        ]
                    }    
                ]
            },
          
            {
                "id":5,
                "type":"knowledge",
                "data":"Web1.0主要是由公司拥有的静态网站，用户之间的互动几乎为零 ❌",
                "path":[
                    {
                        "from":5,
                        "to":6
                    }
                ]
            },
          
           
            {
                "id":6,
                "type":"knowledge",
                "data":"个人很少创造内容，导致它被称为只读网络。🚫🗣️",
                "path":[
                    {
                        "from":6,
                        "to":7
                    }
                ]
            },
           
            {
                "id":7,
                "type":"choices",
                "data":[
                    {
                        "choice":"😢 还蛮遗憾的。",  
                        "path":[
                            {
                                "from":"none",
                                "to":8
                            }
                        ]
                    },
             
                    {
                        "choice":"💻 那Web2.0又是什么呢？",
                        "path":[
                            {
                                "from":"none",
                                "to":8
                            }
                        ]
                    }
                ]
            },
                                              
            {
                "id":8,
                "type":"knowledge",
                "data":"是的，接着迎来了Web2.0时代。🎉",
                "path":[
                    {
                        "from":8,
                        "to":9
                    }
                ]
            },
            
            {
                "id":9,
                "type":"knowledge",
                "data":"Web2.0（2004 年 - 至今），特点：能读能写。",
                "path":[
                    {
                        "from":9,
                        "to":10
                    }
                ]
            },
            
            {
                "id":10,
                "type":"knowledge",
                "data":"网络不再是只读的，它演变成读写网络。 ",
                "path":[
                    {
                        "from":10,
                        "to":11
                    }
                ]
            },
              
            {
                "id":11,
                "type":"knowledge",
                "data":"互联网公司除了向用户提供内容外，还开始提供平台来共享用户生产的内容，并参与用户间的交互。👀💬💻",
                "path":[
                    {
                        "from":11,
                        "to":12
                    }
                ] 
            },
                  
            {
                "id":12,
                "type":"image",
                "data":"https://ethereum.org/static/9f50d47733edad715c3068c4c6a8bc6d/00d43/web2.png",
                "path":[
                    {
                        "from":12,
                        "to":13
                    }
                ] 
            },
           
            
            {
                "id":13,
                "type":"choices",
                "data":[
                    {
                        "choice":"🌐 有什么应用是Web2.0的呢？", 
                        "path":[
                            {
                                "from":"none",
                                "to":14
                            }
                        ]
                    },
                    {
                        "choice":"🤩 和我理解的一样！", 
                        "path":[
                            {
                                "from":"none",
                                "to":17
                            }
                        ]
                    }
             
                ]
            },
                

            {
                "id":14,
                "type":"knowledge",
                "data":"📱社交网络：如WeChat、QQ等。",
                "path":[
                    {
                        "from":14,
                        "to":15
                    }
                ] 
            },
                  
            {
                "id":15,
                "type":"knowledge",
                "data":"📹视频分享：如B站、抖音等。",
                "path":[
                    {
                        "from":15,
                        "to":16
                    }
                ] 
            },  
                   
            {
                "id":16,
                "type":"choices",
                "data":[
                    {
                        "choice":"💡 这些我都在用的！", 
                        "path":[
                            {
                                "from":"none",
                                "to":17
                            }
                        ]
                    },
                  
                    {
                        "choice":"🚀 后来呢？", 
                        "path":[
                            {
                                "from":"none",
                                "to":17
                            }
                        ]
                    }
                ]
             },
              
             {
                "id":17,
                "type":"knowledge",
                "data":"到了Web 3.0，用户对于个人数据有了更多的控制权和选择权🔐🔀。",
                "path":[
                    {
                        "from":17,
                        "to":20
                    }
                ] 
             },
             {
                "id":18,
                "type":"image",
                "data":"https://ethereum.org/static/54eef2049c233f9868af91546a07b2c7/00d43/web3.png",
                "path":[
                    {
                        "from":18,
                        "to":20
                    }
                ] 
            },  
                  
            {
                "id":19,
                "type":"knowledge",
                "data":"Web 3.0：能读🔍 - 能写💬 - 能拥有🤝。它的核心思想有以下：",
                "path":[
                    {
                        "from":19,
                        "to":20
                    }
                ] 
            }
            
            {
                "id":20,
                "type":"choices",
                "data":[
                    {
                        "choice":"去中心化", 
                        "path":[
                            {
                                "from":"none",
                                "to":21
                            }
                        ]
                    },
                  
                    {
                        "choice":"无需许可", 
                        "path":[
                            {
                                "from":"none",
                                "to":22
                            }
                        ]
                    }
                            
                    {
                        "choice":"具有原生支付功能", 
                        "path":[
                            {
                                "from":"none",
                                "to":23
                            }
                        ]
                    }
                    
                    {
                        "choice":"无需信任", 
                        "path":[
                            {
                                "from":"none",
                                "to":24
                            }
                        ]
                    }
                ]
            },
            {
                "id":21,
                "type":"knowledge",
                "data":"大部分互联网💻不是由中心化实体控制和拥有的，而是由🤝构建者和👥用户分配所有权",
                "path":[
                    {
                        "from":21,
                        "to":25
                    }
                ] 
             },
            
             {
                "id":22,
                "type":"knowledge",
                "data":"每个人都有参与 Web3 的平等权限，没有人被排除在外👨‍👩‍👧‍👦🔓",
                "path":[
                    {
                        "from":22,
                        "to":25
                    }
                ] 
             },
             
             {
                "id":23,
                "type":"knowledge",
                "data":"它使用加密货币进行线上消费和汇款💰💸，而不是依赖传统银行或第三方支付机构过时的基础设施🚫🏦",
                "path":[
                    {
                        "from":23,
                        "to":25
                    }
                ] 
             },
             {
                "id":24,
                "type":"knowledge",
                "data":"它通过激励措施和经济机制运转，而不是依赖受信任的第三方。",
                "path":[
                    {
                        "from":24,
                        "to":25
                    }
                ] 
             },
             {
                "id":25,
                "type":"choices",
                "data":[
                    {
                        "choice":"Got!全明白！", 
                        "path":[
                            {
                                "from":"none",
                                "to":31
                            }
                        ]
                    },
                    {
                        "choice":"还不是很明白，可以再简单点说明", 
                        "path":[
                            {
                                "from":"21",
                                "to":26
                            }
                            {
                                "from":"22",
                                "to":27
                            }
                            {
                                "from":"23",
                                "to":28
                            }
                            {
                                "from":"24",
                                "to":29
                            }
                        ]
                    }
                ] 
            },
            
            {
                "id":26,
                "type":"knowledge",
                "data":"🔓 去中心化：无单一中央机构控制。通过把信息分散存储在多个地方，避免单一节点控制，从而提高安全性、稳定性和公正性💻",
                "path":[
                    {
                        "from":26,
                        "to":30
                    }
                ] 
            },
            {
                "id":27,
                "type":"knowledge",
                "data":"🔍 无需认可：用户无需获取其他中介机构的许可、授权或认证，即可自由地使用、访问和交换数字资产和服务💳",
                "path":[
                    {
                        "from":27,
                        "to":30
                    }
                ] 
            },
            {
                "id":28,
                "type":"knowledge",
                "data":"💰 具有原生支付功能：直接支持货币流动。典型的例子是使用加密货币（如比特币、以太坊等）进行支付，这些数字资产通过区块链技术来记录和交换，而无需中心化机构的支持💸",
                "path":[
                    {
                        "from":28,
                        "to":30
                    }
                ] 
            },
            {
                "id":29,
                "type":"knowledge",
                "data":"🙅‍♂️ 无需信任：在交互式协议（如智能合约）的参与过程中，用户无需信任其他参与者，也无需信任中介机构，而可以完全依赖于技术协议和算法来实现交互的信任和验证💡",
                "path":[
                    {
                        "from":28,
                        "to":30
                    }
                ] 
            },
            {
                "id":30,
                "type":"choices",
                "data":[
                    {
                        "choice":"原来如此/OK", 
                        "path":[
                            {
                                "from":"none",
                                "to":31
                            }
                        ]
                     },
                 ] 
            },
            {
                "id":31,
                "type":"knowledge",
                "data":"Web3 很重要，除此以外，最想了解的是?",
                "path":[
                    {
                        "from":31,
                        "to":32
                    }
                ] 
            },
            {
                "id":32,
                "type":"choices",
                "data":[
                    {
                        "choice":"所有权", 
                        "path":[
                            {
                                "from":"none",
                                "to":33
                            }
                        ]
                    },
                  
                    {
                        "choice":"抗审查", 
                        "path":[
                            {
                                "from":"none",
                                "to":34
                            }
                        ]
                    }
                            
                    {
                        "choice":"去中心化自治组织 (DAO)", 
                        "path":[
                            {
                                "from":"none",
                                "to":35
                            }
                        ]
                    }
                    
                    {
                        "choice":"身份", 
                        "path":[
                            {
                                "from":"none",
                                "to":36
                            }
                        ]
                    }
                ]
            },
            {
                "id":33,
                "type":"knowledge",
                "data":"💰 所有权：Web3 允许通过非同质化代币 (NFT) 直接拥有所有权。 任何人甚至是游戏创作者，都没有权力剥夺您的所有权。",
                "path":[
                    {
                        "from":33,
                        "to":34
                    }
                ] 
            },
            {
                "id":34,
                "type":"knowledge",
                "data":"🕵️‍♂️ 抗审查：在 Web3，您的数据位于区块链上。 当您决定离开一个平台时，您可以将您的声誉带走，将其带进另一个更符合您的价值观的平台。",
                "path":[
                    {
                        "from":34,
                        "to":35
                    }
                ] 
            },
            {
                "id":35,
                "type":"knowledge",
                "data":"🤝 去中心化自治组织 (DAO)：在 Web3 中，除了拥有你的数据之外，通过使用类似于公司股票的代币，你还可以作为集体中的一员拥有这个平台。 去中心化自治组织让你可以协调平台的分散化所有权，以及对平台的未来做出决策。",
                "path":[
                    {
                        "from":35,
                        "to":36
                    }
                ] 
            },
            {
                "id":36,
                "type":"knowledge",
                "data":"👤 身份：Web3 允许你使用以太坊地址和以太坊域名服务配置文件控制你的数字身份，从而解决了这些问题。 使用以太坊地址可以提供跨平台单点登录，这种登录安全、抗审查并且匿名。",
                "path":[
                    {
                        "from":36,
                        "to":37
                    }
                ] 
            },
            {
                "id":37,
                "type":"choices",
                "data":[
                    {
                        "choice":"👍 基本能掌握。", 
                        "path":[
                            {
                                "from":"none",
                                "to":42
                            }
                    }
                    {
                        "choice":"🙏 还没理清楚，相信你可以教会我！", 
                        "path":[
                            {
                                "from":"33",
                                "to":38
                            }
                            {
                                "from":"34",
                                "to":39
                            }
                            {
                                "from":"35",
                                "to":40
                            }
                            {
                                "from":"36",
                                "to":41
                            }
                        ]
                    }
                    
                ]
            },
            
            
            
            
            
            {
                "id":43,
                "type":"knowledge",
                "data":"💻 所有权：一些数字资产，例如 ERC-20 Token 或 NFT，是可编程的，允许所有者通过智能合约来实现自定义的所有权规则和交易细节。例如，NFT（不可替代通证）可以用于数字艺术品、游戏资产💼等领域的唯一性识别和所有权转移。",
                "path":[
                    {
                        "from":43,
                        "to":44
                    }
                ] 
            },
            {
                "id":44,
                "type":"knowledge",
                "data":"🚫抗审查：在一些国家，政府可能会对互联网上的内容进行审查和限制，有时候甚至封锁互联网。使用基于区块链技术的去中心化网络🔒 ，例如 IPFS，可以让用户自由地访问、传输、储存和发布内容，避免了互联网审查和封锁的风险。",
                "path":[
                    {
                        "from":44,
                        "to":45
                    }
                ] 
            },
            {
                "id":45,
                "type":"knowledge",
                "data":"🤝DAO（去中心化自治组织）：BuidlerDAO 是一个由 Buidler 社区创造的去中心化自治组织（DAO）🗳️ 。DAO 代币持有者可以通过投票来选择新的理事会成员，决定 Buidler 社区的发展方向，审核和资助社区项目等方面的重要决策。",
                "path":[
                    {
                        "from":45,
                        "to":46
                    }
                ] 
            },
            {
                "id":46,
                "type":"knowledge",
                "data":"👤 身份：Web3 允许你使用以太坊地址和以太坊域名服务配置文件控制你的数字身份，从而解决了这些问题。 使用以太坊地址可以提供跨平台单点登录，这种登录安全、抗审查并且匿名。",
                "path":[
                    {
                        "from":46,
                        "to":47
                    }
                ] 
            },
            
            
            
                       
            
        ]
    }
]




/**
 * 根据对话id获取具体的对话信息
 * 
 * @param {*} id 对话id
 * @returns 
 */
function getDialog(id){
  const dialog = dialogs.filter(e => e.id === parseInt(id))
  if(dialog.length > 0){
    return dialog[0]
  }
  return null;
}
/**
 * 获取对话的简要信息
 */
function getDialogBriefs(){
  return dialogs.map(e => ({"id":e.id, "title": e.title}))
}
module.exports = {
  getDialog,
  getDialogBriefs
}















