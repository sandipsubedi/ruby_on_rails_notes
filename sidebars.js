module.exports = {
  someSidebar: {
    Main: ['index'],
    Gems: ['gems/retriable', 'gems/resque'],
    Resources: ['resources/books','resources/conference','resources/online'],
    Rails: ['rails/distinct', 'rails/security', 'rails/session',
            'rails/terminal_commands', 'rails/to_webpacker'],
    Ruby: [{ Blocks: ['ruby/blocks/blocks', 'ruby/blocks/yield'] },
           { DataStructures: ['ruby/data_structures/arrays', 'ruby/data_structures/map_or_hash', 
                              'ruby/data_structures/queue', 'ruby/data_structures/set', 
                              'ruby/data_structures/sized_queue', 'ruby/data_structures/sorted_set',
                              'ruby/data_structures/stack'] },
           { Getter_Setter: ['ruby/getter_setter/attr_accessor', 'ruby/getter_setter/attr_reader',
                             'ruby/getter_setter/attr_writer', 'ruby/getter_setter/readme'] },
           { Instance_vs_Class: ['ruby/instance_vs_class/class_method', 'ruby/instance_vs_class/class_variable',
                                 'ruby/instance_vs_class/instance_method', 'ruby/instance_vs_class/instance_variable'] },
                                
           { Loops: ['ruby/loops/each', 'ruby/loops/loop', 'ruby/loops/while'] },
           { Ruby_vs_Java: ['ruby/ruby_vs_java/increment_operators'] },
           "ruby/by_value_vs_by_ref","ruby/constants",
           "ruby/documentation_in_command_line",
           "ruby/dup_vs_clone","ruby/hash_syntax","ruby/if_else_ruby","ruby/inheritance_in_ruby",
           "ruby/lambda","ruby/length_size_count","ruby/method_visibility","ruby/params_ruby",
           "ruby/proc","ruby/rails_vs_ruby_methods","ruby/send","ruby/symbol",
           "ruby/type_of_object",
           "ruby/typed"],
    RubyVersionManager: ['ruby_version_manager/rvm'],
  },
};
