module.exports = {
  someSidebar: {
    Main: ['index'],
    Gems: ['gems/retriable'],
    Resources: ['resources/books','resources/conference','resources/online'],
    Rails: ['rails/distinct', 'rails/security', 'rails/session',
            'rails/terminal_commands', 'rails/to_webpacker'],
    Ruby: [{ Blocks: ['ruby/blocks/blocks', 'ruby/blocks/yield'] },
           { Getter_Setter: ['ruby/getter_setter/attr_accessor', 'ruby/getter_setter/attr_reader',
                             'ruby/getter_setter/attr_writer', 'ruby/getter_setter/readme'] },
           { Instance_vs_Class: ['ruby/instance_vs_class/class_method', 'ruby/instance_vs_class/class_variable',
                                 'ruby/instance_vs_class/instance_method', 'ruby/instance_vs_class/instance_variable'] },
                                
           { Loops: ['ruby/loops/each', 'ruby/loops/loop', 'ruby/loops/while'] },
           { Ruby_vs_Java: ['ruby/ruby_vs_java/increment_operators'] },
           "ruby/by_value_vs_by_ref","ruby/constants",
           "ruby/dup_vs_clone","ruby/hash_syntax","ruby/if_else_ruby","ruby/inheritance_in_ruby",
           "ruby/lambda","ruby/length_size_count","ruby/method_visibility","ruby/params_ruby",
           "ruby/proc","ruby/rails_vs_ruby_methods","ruby/send","ruby/symbol",
           "ruby/typed"],
    RubyVersionManager: ['ruby_version_manager/rvm'],
  },
};
