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





